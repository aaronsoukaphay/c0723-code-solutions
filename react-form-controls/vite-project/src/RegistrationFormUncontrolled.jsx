export default function RegistrationFormUncontrolled() {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username: <input name="username" />
      </label>
      <label>
        Password: <input name="password" />
      </label>
      <button type="submit">Submit form</button>
    </form>
  );
}
