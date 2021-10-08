import React from "react";

const Dashboard = () => {
  const changeColour = () => {
    document.body.style.backgroundColor = "black";
    document.getElementByID("form").style.backgroundColor = "black";
    // window.setTimeout("yourFunction()", 10000);
  };

  return (
    <div id="form" className="h-screen flex bg-gradient-to-r from-blue-400 via-red-500 to-pink-500">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          You made to the dashboard!!
        </h1>

        <form>
          <div></div>
          <div></div>
          <div></div>

          <div className="flex justify-center items-center mt-6">
            <button
              onClick={changeColour}
              onSubmit={changeColour}
              className={`bg-green-100 py-2 px-4 m-1.5 text-sm text-black-900 rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Press for magic!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
