import initData from "../mockData/initData";
import categories from "../mockData/categories";
import iconUnarchive from "../../images/icon-unarchived.svg";

let renderedData = initData.filter((item) => item.archived);

const handleUnarchiveBtnClick = (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const recordId = btn.dataset.unarchive;
    const itemToUpdate = initData.find((item) => item.recordId === recordId);
    if (itemToUpdate) {
        itemToUpdate.archived = !itemToUpdate.archived;
        renderedData = initData.filter((item) => item.archived);
        const tableBody = archivedList.querySelector("tbody");
        tableBody.innerHTML = generateTableRows();
    }
    console.log("archive", recordId);
};

const generateTableRows = () => {
    let rowsHtml = "";

    for (const item of renderedData) {
        const { categoryName, createDate, content } = item;
        const category = categories.find(
            (cat) => cat.categoryId === item.categoryId
        );

        const date = new Date(createDate).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });

        const rowHtml = `
      <tr class="flex justify-between items-center text-left py-2 px-2 bg-white border border-teal-500 rounded-md overflow-hidden shadow-sm hover:shadow-md">
        <td class="w-[55px] shrink-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
        <div class="bg-teal-300 p-2 rounded-full flex justify-center w-[50px] h-[50px]">
          <img src="${category.categoryImg}" alt="${
            category.categoryName
        }" width="20" height="20"/>
        </div>
        </td>
        <td class="w-[120px] shrink-0 text-gray-800 text-[18px] font-semibold">${
            item.nameTitle
        }</td>
        <td class="w-[140px] shrink-0">${date}</td>
        <td class="w-[130px] shrink-0">${categoryName}</td>
        <td class="w-[250px] shrink-0">${content}</td>
        <td class="w-[130px] shrink-0">
              ${item.modificationDate.join(", ")}
        </td>
        <td class="flex gap-5  w-[50px] shrink-0">
                <button class="hover:shadow-md p-2 hover:bg-teal-100 rounded-[4px]" data-unarchive=${
                    item.recordId
                }>
                    <img src=${iconUnarchive} alt="Icon archive" width="20" height="20"/>
                </button>
        </td>
      </tr>
    `;

        rowsHtml += rowHtml;
    }

    return rowsHtml;
};

const archivedList = document.createElement("section");
archivedList.classList.add("text-gray-800", "mt-[30px]");
const tableArchivedList = /*html*/ `
<h1 class="text-[40px] font-bold">Archived list</h1>
<table
            class=' relative
            flex
            flex-col
            rounded-md
            text-description
            gap-[10px]
            text-base
            font-normal
            mt-4
            '
        >
        <thead>
        <tr class=" flex justify-between text-left text-[20px] font-semibold py-4 px-2 bg-teal-200 border border-teal-700 rounded-[4px] overflow-hidden shadow-sm hover:shadow-md">
        <th class="w-[55px] shrink-0"></th>
        <th class="w-[130px] shrink-0">Name</th>
        <th class="w-[140px] shrink-0">Created</th>
        <th class="w-[130px] shrink-0">Category</th>
        <th class="w-[250px] shrink-0">Content</th>
        <th class="w-[130px] shrink-0">Dates</th>
        <th class="w-[50px] shrink-0">
                <div class="p-2">
                    <img src=${iconUnarchive} alt="Icon archive" width="20" height="20"/>
                </div>
        </th>
        </tr>
        </thead>
            <tbody class="flex flex-col gap-[10px] text-gray-600">
                ${generateTableRows()}
            </tbody>
        </table>`;

archivedList.innerHTML = tableArchivedList;
const tableBody = archivedList.querySelector("tbody");
tableBody.addEventListener("click", handleUnarchiveBtnClick);

export default archivedList;
