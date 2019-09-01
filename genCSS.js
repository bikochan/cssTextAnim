/* offset child by 1 because CSS indexes differently */
const logo = document.querySelectorAll("#logo path");
var cssAnim = "";
for(let i =0; i<logo.length; i++) {
    cssAnim = cssAnim+`
#logo path:nth-child(${i + 1}) \{
    stroke-dasharray: ${Math.ceil(logo[i].getTotalLength())}px;
    stroke-dashoffset: ${Math.ceil(logo[i].getTotalLength())}px;
    animation: line-anim 2s ease forwards ${i * 3}ms;
\}
`
}

var st = document.createElement("style");
st.type = "text/css";
st.innerText = cssAnim;
document.head.appendChild(st);
