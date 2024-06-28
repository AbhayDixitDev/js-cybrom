function shownavbar(){
    let num=45;
    let navbar = `<ul class="navbarstyle">
        <li><a href="#">Home${num}</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
    </ul>`;
    let store = document.getElementById('output');
    store.innerHTML = navbar;
    }