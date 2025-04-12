const display = document.getElementById('display');

// display.innerHTML = ""
display.innerHTML = ""

for (let i = 0; i < 10; i++) {
    let tile = document.createElement("div")
    tile.classList.add("tiles")
    tile.innerHTML = `
        <div class="tileHeading">
                <h5>Heading ${i} <img src="/down.svg" alt="Down" height="40px"></h5>
                <ul class="subMenuUl">
                    <h6 class="menuStyle"> Menu ${i} <img class="subMenuUlArr" src="/down.svg" alt="subMenu"
                            height="20px">
                    </h6>
                    <ul class="subMenuUlsub">
                        <h6 class="menuStyle"> subMenu 1 <img class="subMenuLiArr" src="/down.svg" alt="subMenu"
                                height="20px"> </h6>
                        <ul class="subMenuUlsubAgain">
                            <li class="mini menuStyle">subMiniMenu1 <a href="#"> Go </a></li>
                            <li class="mini menuStyle">subMiniMenu2 <a href="#"> Go </a></li>
                            <li class="mini menuStyle">subMiniMenu3 <a href="#"> Go </a></li>
                            <li class="mini menuStyle">subMiniMenu4 <a href="#"> Go </a></li>
                        </ul>
                    </ul>
                    <ul class="subMenuUlsub">
                        <h6 class="menuStyle"> subMenu 2 <img class="subMenuLiArr" src="/down.svg" alt="subMenu"
                                height="20px"> </h6>
                        <ul class="subMenuUlsubAgain">
                            <li class="mini menuStyle">subMiniMenu1 <a href="#"> Go </a></li>
                            <li class="mini menuStyle">subMiniMenu2 <a href="#"> Go </a></li>
                            <li class="mini menuStyle">subMiniMenu3 <a href="#"> Go </a></li>
                            <li class="mini menuStyle">subMiniMenu4 <a href="#"> Go </a></li>
                        </ul>
                    </ul>
                    <ul class="subMenuUlsub">
                        <h6 class="menuStyle"> subMenu 3 <img class="subMenuLiArr" src="/down.svg" alt="subMenu"
                                height="20px"> </h6>
                        <ul class="subMenuUlsubAgain">
                            <li class="mini menuStyle">subMiniMenu1 <a href="#"> Go </a></li>
                            <li class="mini menuStyle">subMiniMenu2 <a href="#"> Go </a></li>
                            <li class="mini menuStyle">subMiniMenu3 <a href="#"> Go </a></li>
                            <li class="mini menuStyle">subMiniMenu4 <a href="#"> Go </a></li>
                        </ul>
                    </ul>
                    <ul class="subMenuUlsub">
                        <h6 class="menuStyle"> subMenu 4 <img class="subMenuLiArr" src="/down.svg" alt="subMenu"
                                height="20px"> </h6>
                        <ul class="subMenuUlsubAgain">
                            <li class="mini menuStyle">subMiniMenu1 <a href="#"> Go </a></li>
                            <li class="mini menuStyle">subMiniMenu2 <a href="#"> Go </a></li>
                            <li class="mini menuStyle">subMiniMenu3 <a href="#"> Go </a></li>
                            <li class="mini menuStyle">subMiniMenu4 <a href="#"> Go </a></li>
                        </ul>
                    </ul>
            </div>
    `;
    display.appendChild(tile);

}