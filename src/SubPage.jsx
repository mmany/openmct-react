import { useNavigate } from "react-router-dom";

function SubPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='bg-blue-500 text-white py-4 px-6'>
        <h1 className='text-2xl font-bold'>OpenMCT with React demo</h1>
      </div>
      <div class='container mx-auto py-8 px-4'>
        <h2 class='text-3xl font-bold mb-4'>
          This is a subpage for the application
        </h2>
      </div>
      <div className='flex flex-row justify-center space-x-4 items-center h-64'>
        <button
          className='bg-blue-600 hover:bg-blue-500 hover:ring hover:ring-red-300 rounded p-2 text-white'
          onClick={() => navigate("/")}
        >
          Go To Main Page
        </button>
      </div>
    </div>
  );
}

export { SubPage };
