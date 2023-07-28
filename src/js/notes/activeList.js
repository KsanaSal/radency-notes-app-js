const activeList = document.createElement("section");
activeList.classList.add("text-gray-800", "w-full");
const tableActiveList = /*html*/ `
<h1 class="text-[40px] font-bold">Active list</h1>
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
                    class=" flex justify-between text-left text-[18px] font-semibold py-2 px-4 bg-teal-200 border border-teal-700 rounded-[4px] overflow-hidden shadow-sm hover:shadow-md"
                >
                    <th class="w-[60px] shrink-0">Images</th>
                    <th class="w-[130px] shrink-0">Name</th>
                    <th class="w-[150px] shrink-0">Created</th>
                    <th class="w-[100px] shrink-0">Category</th>
                    <th class="w-[120px] shrink-0">Content</th>
                    <th class="w-[175px] shrink-0">Dates</th>
                    <th class="w-[135px] shrink-0">Icons</th>
                </tr>
            </thead>
            <tbody class=" flex flex-col gap-[10px] text-gray-600">
                <tr
                    class="flex justify-between items-center text-left  py-2 px-4 bg-white border border-teal-500 rounded-md overflow-hidden shadow-sm hover:shadow-md"
                >
                    <td
                        class="w-[60px] shrink-0 overflow-ellipsis whitespace-nowrap overflow-hidden"
                    >
                        images
                    </td>
                    <td class="w-[130px] shrink-0 text-gray-800 font-semibold">Shopping list</td>
                    <td class="w-[150px] shrink-0">
                        date
                    </td>
                    <td class="w-[100px] shrink-0">
                        idea
                    </td>
                    <td class="w-[120px] shrink-0">new</td>

                    <td class="w-[175px] shrink-0">
                        <div class="flex flex-row gap-[5px] ">
                            <div
                                class="text-secondary-80 bg-tertiary-30 text-center rounded-md px-[14px] py-[1px] "
                            >
                                date list
                            </div>
                        </div>
                    </td>
                    <td class="flex gap-5  w-[135px] shrink-0">
                        <div class="hover:shadow-md">icons</div>
                    </td>
                </tr>
            </tbody>
        </table>
        <button class="text-gray-800 font-bold text-[18px] border-2 px-3 py-1 rounded-lg border-teal-800 bg-teal-200 hover:bg-teal-800 hover:text-white block mt-4 ml-auto">Create Note</button>
        `;
activeList.innerHTML = tableActiveList;

export default activeList;
