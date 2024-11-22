export default function LoginPage() {
  return (
    <form className="space-y-4 p-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border p-2"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="mt-1 block w-full rounded-md border p-2"
        />
      </div>

      <button type="submit" className="w-full rounded-md bg-blue-500 py-2 text-white">
        Log in
      </button>
    </form>
  )
}
