import "../../style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
import tableActiveList from "./notes/activeList.js";
import tableSummaryList from "./notes/summaryList.js";
import tableArchivedList from "./notes/archivedList.js";

const app = document.querySelector("#app");

app.appendChild(tableActiveList);
app.appendChild(tableSummaryList);
app.appendChild(tableArchivedList);
