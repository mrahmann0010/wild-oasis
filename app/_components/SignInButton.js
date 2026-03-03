import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="btn-outlined">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          width="18"
          height="18"
          style={{ opacity: 0.9 }}
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
