import "../../style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
import tableActiveList from "./tables/activeList.js";
import tableSummaryList from "./tables/summaryList.js";
import tableArchivedList from "./tables/archivedList.js";

const app = document.querySelector("#app");

app.appendChild(tableActiveList);
app.appendChild(tableSummaryList);
app.appendChild(tableArchivedList);
