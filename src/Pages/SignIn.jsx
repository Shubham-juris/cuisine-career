const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-[70vh] px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full border rounded-lg px-4 py-2" />
          <input type="password" placeholder="Password" className="w-full border rounded-lg px-4 py-2" />
          <button className="w-full bg-[#8d877b] text-white py-2 rounded-lg hover:bg-gray-700">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
