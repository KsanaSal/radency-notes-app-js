import initData from "../mockData/initData";
import categories from "../mockData/categories";
import emitter from "../../utils/eventEmitter";

const handleCreateNoteBtnClick = () => {
    const modalHtml = `
        <div class="fixed inset-0 z-10 flex justify-center items-center bg-opacity-50 bg-gray-900">
          <div class="bg-teal-50 p-8 rounded-lg w-[500px] text-gray-800">
            <h2 class="text-[30px] font-bold mb-4 text-center">Create New Note</h2>
            <form id="createNoteForm">
              <div class="mb-4">
                <label for="noteTitle" class="block font-semibold text-[20px]">Title:</label>
                <input type="text" id="noteTitle" name="noteTitle" class="w-full text-[18px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-teal-500" required />
              </div>
              <div class="mb-4">
                <label for="noteCategory" class="block font-semibold text-[20px]">Category:</label>
                <select id="noteCategory" name="noteCategory" class="w-full text-[18px] text-teal-800 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-teal-500" required>
                  <option value="" disabled selected>Select a category...</option>
                  ${categories
                      .map(
                          (category) =>
                              `<option value="${category.categoryId}">${category.categoryName}</option>`
                      )
                      .join("")}
                </select>
              </div>
              <div class="mb-4">
                <label for="noteContent" class="block font-semibold text-[20px]">Content:</label>
                <textarea id="noteContent" name="noteContent" rows="4" class="w-full text-[18px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-teal-500" required></textarea>
              </div>
              <div class="flex justify-end">
                <button type="button" id="cancelCreateNote" class=" text-teal-500 text-[18px] hover:text-teal-800 border-teal-800 border-2 px-4 py-2 rounded-md mr-3 bg-white hover:bg-teal-100">Cancel</button>
                <button type="submit" class="text-white text-[18px] bg-teal-500 border-teal-800 border-2 px-4 py-2 rounded-md ml-3 hover:bg-teal-100 hover:text-teal-800">Create</button>
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

    const createNoteForm = modalContainer.querySelector("#createNoteForm");
    createNoteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(createNoteForm);
        const newNote = {
            categoryId: formData.get("noteCategory"),
            categoryName: categories.find(
                (category) =>
                    category.categoryId === formData.get("noteCategory")
            ).categoryName,
            categoryImg: categories.find(
                (category) =>
                    category.categoryId === formData.get("noteCategory")
            ).categoryImg,
            createDate: new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            }),
            content: formData.get("noteContent"),
            nameTitle: formData.get("noteTitle"),
            mode: "add",
            recordId: String(Date.now()),
            modificationDate: [],
            archived: false,
        };

        initData.push(newNote);
        emitter.emit("dataChanged");
        closeModal();
    });

    const cancelCreateNoteBtn =
        modalContainer.querySelector("#cancelCreateNote");
    cancelCreateNoteBtn.addEventListener("click", () => {
        closeModal();
    });
};

export default handleCreateNoteBtnClick;
