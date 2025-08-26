const PostJob = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Post a Job</h1>
      <form className="space-y-4 bg-white p-6 shadow rounded-xl">
        <input type="text" placeholder="Job Title" className="w-full border rounded-lg px-4 py-2" />
        <input type="text" placeholder="Location" className="w-full border rounded-lg px-4 py-2" />
        <textarea placeholder="Job Description" className="w-full border rounded-lg px-4 py-2 h-32"></textarea>
        <button className="bg-[#8d877b] text-white px-6 py-2 rounded-lg hover:bg-gray-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostJob;
