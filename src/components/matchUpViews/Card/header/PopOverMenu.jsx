import React from "react";

function PopoverMenu() {
  return (
    <div className="btn-group close">
      <button
        type="button"
        className="btn btn-sm btn-outline-secondary btn-menu-card"
      >
        <span class="fa fa-trash" aria-hidden="true"></span>
      </button>
      <button
        type="button"
        className="btn btn-sm btn-outline-secondary btn-menu-card"
      >
        <span class="fa fa-edit" aria-hidden="true"></span>
      </button>
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
