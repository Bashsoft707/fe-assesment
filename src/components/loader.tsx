export const LoadingSpinner = (props: any) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div
        className={`border-t-transparent w-12 h-12 border-4 border-solid rounded-full animate-spin ${
          props.className ? props.className : ""
        }`}
      ></div>
    </div>
  );
};
