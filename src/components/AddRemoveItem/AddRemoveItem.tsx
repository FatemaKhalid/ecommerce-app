type AddRemoveItemProps = {
  handleAddClick: () => void;
  handleRemoveClick: () => void;
};
export function AddRemoveItemComponent({
  handleAddClick,
  handleRemoveClick,
}: AddRemoveItemProps) {
  return (
    <div className="ml-auto w-10 h-10">
      <button
        onClick={handleAddClick}
        className="rounded-t-lg bg-gray-900 text-white hover:bg-white hover:text-gray-900 hover:shadow-xl focus:outline-none flex transition duration-300"
      >
        <AddIcon />
      </button>
      <button
        onClick={handleRemoveClick}
        className="rounded-b-lg bg-gray-900 text-white hover:bg-white hover:text-gray-900 hover:shadow-xl focus:outline-none flex transition duration-300"
      >
        <RemoveIcon />
      </button>
    </div>
  );
}

function AddIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-current m-auto"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}

function RemoveIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-current m-auto"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}
