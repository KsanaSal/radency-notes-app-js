import initData from "../mockData/initData";
import categories from "../mockData/categories";
import emitter from "../../utils/eventEmitter";

const handleEditBtnClick = (recordId) => {
    const recordToEdit = initData.find((item) => item.recordId === recordId);

    if (!recordToEdit) {
        console.error(`Record with recordId ${recordId} not found.`);
        return;
    }

    const modalHtml = /*html*/ `
      <div class="fixed inset-0 z-10 flex justify-center items-center bg-opacity-50 bg-gray-900">
        <div class="bg-teal-50 p-8 rounded-lg w-[500px] text-gray-800">
          <h2 class="text-[30px] font-bold mb-4 text-center">Edit Note</h2>
          <form id="editNoteForm">
            <div class="mb-4">
              <label for="noteTitle" class="block font-semibold text-[20px]">Title:</label>
              <input type="text" id="noteTitle" name="noteTitle" class="w-full text-[18px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-teal-500" value="${
                  recordToEdit.nameTitle
              }" required />
            </div>
            <div class="mb-4">
              <label for="noteCategory" class="block font-semibold text-[20px]">Category:</label>
              <select id="noteCategory" name="noteCategory" class="w-full text-[18px] text-teal-800 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-teal-500" required>
                <option value="" disabled>Select a category...</option>
                ${categories
                    .map(
                        (category) =>
                            `<option value="${category.categoryId}" ${
                                category.categoryId === recordToEdit.categoryId
                                    ? "selected"
                                    : ""
                            }>${category.categoryName}</option>`
                    )
                    .join("")}
              </select>
            </div>
            <div class="mb-4">
              <label for="noteContent" class="block font-semibold text-[20px]">Content:</label>
              <textarea id="noteContent" name="noteContent" rows="4" class="w-full text-[18px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-teal-500" required>${
                  recordToEdit.content
              }</textarea>
            </div>
            <div class="flex justify-end">
              <button type="button" id="cancelEditNote" class="text-teal-500 text-[18px] hover:text-teal-800 border-teal-800 border-2 px-4 py-2 rounded-md mr-3 bg-white hover:bg-teal-100">Cancel</button>
              <button type="submit" class="text-white text-[18px] bg-teal-500 border-teal-800 border-2 px-4 py-2 rounded-md ml-3 hover:bg-teal-100 hover:text-teal-800">Save</button>
            </div>
          </form>
        </div>
      </div>
    `;

    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = modalHtml;
    document.body.appendChild(modalContainer);

    const closeModal = () => {
        modalContainer.remove();
    };

    const editNoteForm = modalContainer.querySelector("#editNoteForm");
    editNoteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(editNoteForm);

        recordToEdit.categoryId = formData.get("noteCategory");
        recordToEdit.categoryName = categories.find(
            (category) => category.categoryId === formData.get("noteCategory")
        ).categoryName;
        recordToEdit.categoryImg = categories.find(
            (category) => category.categoryId === formData.get("noteCategory")
        ).categoryImg;
        recordToEdit.content = formData.get("noteContent");
        recordToEdit.nameTitle = formData.get("noteTitle");
        recordToEdit.mode = "edit";
        recordToEdit.modificationDate.push(
            new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            })
        );
        closeModal();
        emitter.emit("dataChanged");
    });

    const cancelEditNoteBtn = modalContainer.querySelector("#cancelEditNote");
    cancelEditNoteBtn.addEventListener("click", () => {
        closeModal();
    });
};

export default handleEditBtnClick;
