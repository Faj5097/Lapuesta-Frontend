import React from "react";

function PopoverMenu() {
  const [isOpen, setOpen] = React.useState(false);

  // helper function to close the menu
  function handleBtnClick() {
    isOpen ? setOpen(false) : setOpen(true);
  }

  // Again, we're using framer-motion for the transition effect
  return (
    <div class="container mt-3">
      <h3>Popover Options</h3>
      <p>
        The <strong>placement</strong> option specifies the popover position.
      </p>
      <div>
        <button class="btn btn-warning">Top</button>
        <button class="btn btn-success">Bottom</button>
        <button class="btn btn-danger">Left</button>
        <button class="btn btn-primary">Right</button>
      </div>
    </div>
    //   <div>
    //       <button
    //         type="button"
    //         className="btn close"
    //         aria-label="Close"
    //         onClick={handleBtnClick}
    //       >
    //         <span aria-hidden="true">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="16"
    //             height="16"
    //             fill="currentColor"
    //             className="bi bi-three-dots-vertical"
    //             viewBox="0 0 16 16"
    //           >
    //             <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
    //           </svg>
    //         </span>
    //       </button>
    //       {isOpen && (
    //         <nav class="nav flex-column">
    //           <a class="nav-link active" href="#">
    //             Active
    //           </a>
    //           <a class="nav-link" href="#">
    //             Link
    //           </a>
    //           <a class="nav-link" href="#">
    //             Link
    //           </a>
    //           <a class="nav-link disabled" href="#">
    //             Disabled
    //           </a>
    //         </nav>
    //       )}
    //     </div>
  );
}

export default PopoverMenu;
