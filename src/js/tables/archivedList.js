import initData from "../mockData/initData";
import iconUnarchive from "../../images/icon-unarchived.svg";
import emitter from "../../utils/eventEmitter";
import generateTableRows from "./generateTableRows";

let renderedData = initData.filter((item) => item.archived);

const handleUnarchiveBtnClick = (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const recordId = btn.dataset.unarchive;
    const itemToUpdate = initData.find((item) => item.recordId === recordId);
    if (itemToUpdate) {
        itemToUpdate.archived = !itemToUpdate.archived;
        emitter.emit("dataChanged");
    }
};

emitter.on("dataChanged", () => {
    renderedData = initData.filter((item) => item.archived);
    const tableBody = archivedList.querySelector("tbody");
    tableBody.innerHTML = generateTableRows(renderedData, "archived");
});

const archivedList = document.createElement("section");
archivedList.classList.add("text-gray-800", "mt-[30px]");
const tableArchivedList = `
<h1 class="text-[40px] font-bold">Archived list</h1>
<table class=' relative flex flex-col rounded-md text-description gap-[10px] text-base font-normal mt-4'>
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
                ${generateTableRows(renderedData, "archived")}
            </tbody>
        </table>`;

archivedList.innerHTML = tableArchivedList;
const tableBody = archivedList.querySelector("tbody");
tableBody.addEventListener("click", handleUnarchiveBtnClick);

export default archivedList;
