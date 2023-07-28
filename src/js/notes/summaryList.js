const summaryList = document.createElement("section");
summaryList.classList.add("text-black-600");
const tableSummaryList = /*html*/ `
<h1 class="text-[40px]">Summary list</h1>
<table
            class=' relative
            flex
            flex-col
            rounded-md
            text-description
            gap-[10px]
            text-s-regular
            '
        >
            <thead>
                <tr
                    class=" flex justify-between text-left py-2 px-4 bg-teal-200 border border-teal-700 rounded-[4px] overflow-hidden shadow-sm hover:shadow-md"
                >
                    <th class="w-[60px] shrink-0">Images</th>
                    <th class="w-[130px] shrink-0">Note Category</th>
                    <th class="w-[150px] shrink-0">Active</th>
                    <th class="w-[100px] shrink-0">Archived</th>
                </tr>
            </thead>
            <tbody class=" flex flex-col gap-[10px]">
                <tr
                    class="flex justify-between items-center  text-secondary-80 text-left  py-2 px-4 bg-white border border-teal-500 rounded-md overflow-hidden shadow-sm hover:shadow-md"
                >
                    <td
                        class="w-[60px] shrink-0 overflow-ellipsis whitespace-nowrap overflow-hidden"
                    >
                        images
                    </td>
                    <td class="w-[130px] shrink-0">Random Thought</td>
                    <td class="w-[150px] shrink-0">
                        2
                    </td>
                    <td class="w-[100px] shrink-0">
                        1
                    </td>
                </tr>
            </tbody>
        </table>`;
summaryList.innerHTML = tableSummaryList;

export default summaryList;
