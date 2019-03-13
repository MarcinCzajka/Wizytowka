let currentStyle = 1;
document.getElementById("change-color").innerHTML = "Dark theme";

const changeLayout = () => {
    if(currentStyle === 1){
        document.documentElement.style.setProperty('--main-background', '#666')
        document.documentElement.style.setProperty('--ccBlack', '#666')
        document.documentElement.style.setProperty('--navBackground', '#444')
        document.documentElement.style.setProperty('--whoAmI', 'linear-gradient(#B4DCE7, #777)')
        document.documentElement.style.setProperty('--ccYellow', '#FFC53D')
        document.documentElement.style.setProperty('--beige', '#ECE5D4')
        document.documentElement.style.setProperty('--blueish', 'var(--beige)')
        document.documentElement.style.setProperty('--reddish', '#D39A8E')
        document.documentElement.style.setProperty('--shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)')

        document.getElementById("change-color").innerHTML = "Normal theme";
        currentStyle = 2;
    }
    else{
        document.documentElement.style.setProperty('--main-background', '#ded4ec')
        document.documentElement.style.setProperty('--ccBlack', '#666')
        document.documentElement.style.setProperty('--navBackground', '#444')
        document.documentElement.style.setProperty('--whoAmI', 'linear-gradient(var(--beige), orange)')
        document.documentElement.style.setProperty('--ccYellow', '#FFC53D')
        document.documentElement.style.setProperty('--beige', '#ECE5D4')
        document.documentElement.style.setProperty('--blueish', '#B4DCE7')
        document.documentElement.style.setProperty('--reddish', '#D39A8E')
        document.documentElement.style.setProperty('--shadow', '0 4px 8px 0 rgb(0, 255, 200), 0 6px 20px 0 rgb(128, 0 ,128)')

        document.getElementById("change-color").innerHTML = "Dark theme";
        currentStyle = 1;
    }
}