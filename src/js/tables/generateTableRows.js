import iconDelete from "../../images/icon-delete.svg";
import iconArchive from "../../images/icon-archived.svg";
import iconEdit from "../../images/icon-edit.svg";
import iconUnarchive from "../../images/icon-unarchived.svg";
import parseDate from "../../utils/parseDate";
import categories from "../mockData/categories";

const generateTableRows = (renderedData, type) => {
    const isActive = type === "active";
    let rowsHtml = "";

    for (const item of renderedData) {
        const { categoryName, createDate, content } = item;
        const category = categories.find(
            (category) => category.categoryId === item.categoryId
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
        <td class="w-[120px] shrink-0 text-gray-800 text-[18px] font-semibold truncate text-ellipsis white-space: nowrap">${
            item.nameTitle
        }</td>
        <td class="w-[135px] shrink-0">${date}</td>
        <td class="w-[130px] shrink-0">${categoryName}</td>
        <td class="w-[170px] shrink-0 truncate text-ellipsis white-space: nowrap">${content}</td>
        <td class="w-[130px] shrink-0">
              ${parseDate(content)}
        </td>
        <td class="flex gap-5  ${isActive ? "w-[130px]" : "w-[50px]"} shrink-0">
            ${
                isActive
                    ? `<div class="flex gap-2">
                <button class="hover:shadow-md p-2 hover:bg-teal-100 rounded-[4px]" data-edit=${item.recordId}>
                    <img src=${iconEdit} alt="Icon edit" width="20" height="20"/>
                </button>
                <button class="hover:shadow-md p-2 hover:bg-teal-100 rounded-[4px]" data-archive=${item.recordId}>
                    <img src=${iconArchive} alt="Icon archive" width="20" height="20"/>
                </button>
                <button class="hover:shadow-md p-2 hover:bg-teal-100 rounded-[4px]" data-delete=${item.recordId}>
                    <img src=${iconDelete} alt="Icon delete" width="20" height="20"/>
                </button>
            </div>`
                    : `<button class="hover:shadow-md p-2 hover:bg-teal-100 rounded-[4px]" data-unarchive=${item.recordId}>
                                    <img src=${iconUnarchive} alt="Icon archive" width="20" height="20"/>
                                </button>`
            }
        </td>
      </tr>
    `;

        rowsHtml += rowHtml;
    }

    return rowsHtml;
};

export default generateTableRows;
