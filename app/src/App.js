import React, {useState} from 'react';
import NavBar from './nav/NavBar';
import jungle from './background_jungle_01.png';

import {
    MainDiv
} from './styledComp/StyledComp';


function App() {
    const [fixed, setFixedMenu] = useState(false);


  return (
    <div style = {{width: "80%", margin: '10px auto'}}>
        <NavBar />
        <div style = {{marginTop: '70px',
        backgroundImage: `url(${jungle})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '90%',
        margin: "5px auto",
        position: "absolute",
        zIndex : "-1",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    
    
    
    }}
    >
        

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar sem non ante fermentum, interdum sagittis dui imperdiet. Vestibulum in posuere sem. Proin vel sapien velit. Fusce efficitur quam eget condimentum placerat. Nam vitae lorem ut leo bibendum venenatis. Pellentesque iaculis ipsum vel interdum tincidunt. Sed scelerisque vehicula arcu. Mauris tristique scelerisque hendrerit. Nunc lobortis ex id dui cursus rutrum.

Nunc at leo odio. Fusce a sapien nunc. Fusce bibendum accumsan ipsum, ultrices laoreet est dictum nec. Duis at justo eu nisi interdum convallis. Cras tempus vitae turpis vel egestas. Aliquam gravida interdum lorem et hendrerit. Donec sed dignissim elit. Nulla non feugiat justo, id iaculis ante. Duis aliquam euismod est vitae maximus.

In porta at sapien hendrerit condimentum. Vestibulum nec urna sed eros posuere venenatis eget quis arcu. Nulla quis vestibulum massa, nec venenatis nulla. Curabitur interdum eget justo tristique dapibus. Nulla eget risus lacus. Curabitur in sapien sed est convallis luctus. Nulla vel neque non magna luctus ultrices id vel mauris. Pellentesque tincidunt arcu eu nisi rutrum, id semper turpis aliquam. Vestibulum vulputate, velit vitae convallis faucibus, ante nunc vestibulum massa, egestas commodo odio turpis in lorem. Nunc porttitor ante sit amet dui imperdiet, ut interdum nulla feugiat. Ut id nisl quam. Duis bibendum erat sit amet venenatis placerat. In quis leo condimentum, dapibus nunc sed, auctor lectus.

Nam nec erat odio. Vivamus sagittis neque quam, ac fermentum velit maximus at. In hac habitasse platea dictumst. Nulla sed dui elementum, ullamcorper sem et, pretium dolor. Sed vel congue justo. Vestibulum tempor porttitor ultricies. Nullam vitae ullamcorper diam, sit amet lobortis lorem. Vestibulum eleifend sollicitudin risus in sodales. Suspendisse vehicula vulputate consequat. Donec facilisis sollicitudin justo sed tempor. Fusce ultricies lobortis risus, nec rutrum turpis facilisis iaculis. Phasellus eget urna quis mauris porttitor finibus eget luctus quam. Sed bibendum sapien sit amet mattis pellentesque. Morbi sapien est, blandit interdum condimentum at, iaculis vitae eros. Integer iaculis tincidunt sapien eu gravida. Aliquam congue purus ut nibh ornare lacinia quis lobortis nunc.

Vestibulum consectetur molestie rutrum. Vestibulum orci tortor, aliquet at volutpat sit amet, egestas eget erat. Sed malesuada condimentum lacus, aliquet commodo dui tincidunt quis. Mauris mollis viverra maximus. In vitae blandit quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam imperdiet urna ut nibh ultricies, non porttitor orci gravida. Curabitur dignissim augue ut porta tristique. Vivamus faucibus tellus ut elit luctus, eu accumsan elit eleifend. Maecenas semper quam nisi, vel rhoncus nulla imperdiet eu. Donec porttitor nisi at risus interdum volutpat. Pellentesque volutpat lobortis urna aliquet ultricies. 
        </div>

    </div>
  );
}

export default App;
