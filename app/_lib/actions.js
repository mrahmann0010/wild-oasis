"use server"

import { revalidatePath } from "next/cache";
import { signIn, signOut, auth } from "./auth"
import { supabase } from "./supabase";
import { se } from "date-fns/locale";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function updateGuestProfile(formData) {
    const session = await auth();
    if(!session) throw new Error('User is not authorized to perform this action');

    const nationalID = formData.get('nationalID');
    const [nationality, countryFlag] = formData.get('nationality').split('%');

    // These code is used to generate Regex signature - For validating national ID's
    const nationalIDRegex = /^[a-zA-Z0-9]{6,12}$/;

    // if(!nationalIDRegex.test(nationalID)) 
    //     throw new Error('Please Provide Valid ID');
    const updateData = {nationality, nationalID, countryFlag};
    console.log(session.user.guestId);
    
    const { data, error } = await supabase
        .from('guests')
        .update(updateData)
        .eq('id', session.user.guestId);
    
      if (error) 
        throw new Error('Guest could not be updated');

    //   To update the Stale Data - Clearing the Cache
      revalidatePath('/account/profile');
}


export async function deleteReservation(bookingId) {
    const session = await auth();
    if(!session) throw new Error('User is not authorized to perform Delete Operation');

    const guestBookings = await getBookings(session.user.guestId);
    const guestBookingIds = guestBookings.map((booking=> booking.id));
    if(!guestBookingIds.includes(bookingId))
        throw new Error('You are not allowed to delete this booking');
    const {error} = await supabase.from('bookings')
    .delete().eq('id', bookingId);
    if(error)
        throw new Error('Deletion Failed');

    revalidatePath('/account/reservations');
}

export async function updateReservation(formData) {
    const session = await auth();
    if(!session) throw new Error('User is not authorized to perform Update Reservation');


    const numGuests = Number(formData.get('numGuests'));
    const observations = formData.get('observations');
    const updatedData = {numGuests, observations};
    const reservationId = Number(formData.get('reservationId'));

    const guestBookings = await getBookings(session.user.guestId);
    const guestBookingIds = guestBookings.map((booking)=> booking.id);
    

    if(!guestBookingIds.includes(Number(reservationId))){
        throw new Error('You are not allowed to Update this booking');
    }

    const {error} = await supabase.from('bookings')
    .update(updatedData).eq('id', reservationId);

    if(error) {
        throw new Error('Guest could not be updated');
    };

    revalidatePath(`/account/reservations/edit/${reservationId}`);
    redirect('/account/reservations');
}   




export async function signInAction() {
    await signIn('google', {redirectTo:'/account'});
}

export async function signOutAction() {
    await signOut({redirectTo:'/'});
}