import initData from "../mockData/initData";
import categories from "../mockData/categories";
import emitter from "../eventEmitter";

const countNotesCategory = (categoryId, archived) =>
    initData.filter(
        (item) => item.categoryId === categoryId && item.archived === archived
    ).length;

emitter.on("dataChanged", () => {
    const tableBody = summaryList.querySelector("tbody");
    tableBody.innerHTML = generateTableRows();
});

const generateTableRows = () => {
    let rowsHtml = "";

    for (const category of categories) {
        const { categoryId, categoryName, categoryImg } = category;
        const activeCount = countNotesCategory(categoryId, false);
        const archivedCount = countNotesCategory(categoryId, true);

        const rowHtml = `
                <tr
                    class="flex items-center text-left  py-2 px-4 bg-white border border-teal-500 rounded-md overflow-hidden shadow-sm hover:shadow-md"
                >
                <td class="w-[70px] shrink-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
                <div class="bg-teal-300 p-2 rounded-full flex justify-center w-[50px] h-[50px]">
                    <img src="${category.categoryImg}" alt="${category.categoryName}" width="20" height="20"/>
                </div>
                    <td class="w-[550px] shrink-0 text-gray-800 font-semibold">${categoryName}</td>
                    <td class="w-[270px] shrink-0">
                        ${activeCount}
                    </td>
                    <td class="w-[270px] shrink-0">
                        ${archivedCount}
                    </td>
                </tr>
    `;

        rowsHtml += rowHtml;
    }

    return rowsHtml;
};

const summaryList = document.createElement("section");
summaryList.classList.add("text-gray-800", "mt-[30px]");
const tableSummaryList = /*html*/ `
<h1 class="text-[40px] font-bold">Summary list</h1>
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
                <tr
                    class=" flex text-left text-[18px] font-semibold py-2 px-4 bg-teal-200 border border-teal-700 rounded-[4px] overflow-hidden shadow-sm hover:shadow-md"
                >
                    <th class="w-[70px] shrink-0"></th>
                    <th class="w-[550px] shrink-0">Note Category</th>
                    <th class="w-[270px] shrink-0">Active</th>
                    <th class="w-[270px] shrink-0">Archived</th>
                </tr>
            </thead>
            <tbody class="flex flex-col gap-[10px] text-gray-600">
                ${generateTableRows()}
            </tbody>
        </table>`;
summaryList.innerHTML = tableSummaryList;

export default summaryList;
