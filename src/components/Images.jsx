import React from 'react'

function Images(props) {
  const showImage = () => {

    switch (props.list) {
      case 'aberration':
        return <img src="https://i.imgur.com/WBaZ8PJ.png" alt="beholder" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/q680EU9.png" alt="clumpy" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/Mgod8xo.png" alt="chuthlu" height="300px" width="300px" />;

      case 'celestial':
          return <img src="https://cdnb.artstation.com/p/assets/images/images/000/122/967/large/han-ahreum-s03.jpg" alt="monny" height="300px" width="300px"/>

      case 'monstrosity':
        return <img src="https://i.imgur.com/SEDWVXZ.png" alt="chuul, giant crab like creature" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/VXXFrAu.png" alt="no idea" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/UFgNcOg.png" alt="no idea" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/XwCIuZQ.png" alt="pillar" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/qFreXki.png" alt="bug" height="300px" width="300px" />;

      case 'beast':
        return <img src="https://i.imgur.com/kOZ0VTA.png" alt="chimera" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/0xAu7Te.png" alt="coutl" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/TxbaIzG.png" alt="beaky" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/wxedp16.png" alt="insect" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/zdyce9r.png" alt="griffon" height="300px" width="300px" />;

      case 'plant':
        return <img src="https://i.imgur.com/1Y9m2P4.png" alt="bad leaf people" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/X4fB4tp.png" alt="mushroom people" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/ioSnghn.png" alt="trend" height="300px" width="300px" />;

      case 'construct':
        return <img src="https://i.imgur.com/FIgrhGW.png" alt="iron golum" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/uy3zmS5.png" alt="clay golum" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/URkE7ky.png" alt="armor" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/CuntAWe.png" alt="scarecrow" height="300px" width="300px" />;

      case 'dragon':
        return <img src="https://i.imgur.com/h2iaJjt.png" alt="blue dragon" height="300px" width="300px" />;
       // return <img src="https://i.imgur.com/fCZ9hVp.png" alt="black dragon" height="300px" width="300px" />;

      case 'elemental':
        return <img src="https://i.imgur.com/LodHlTB.png" alt="genie" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/WxNqjmV.png" alt="water dragon" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/FqMHdKq.png" alt="earth elemental" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/eMLzU2v.png" alt="gargoyles" height="300px" width="300px" />;

      case 'fey':
        return <img src="https://i.imgur.com/DwUGeog.png" alt="wood spirit" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/EhCfX7X.png" alt="fey" height="300px" width="300px" />;

      case 'fiend':
        return <img src="https://i.imgur.com/GqOXfn7.png" alt="campion" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/VFme82w.png" alt="monny" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/Gd1K4Sj.png" alt="monny" height="300px" width="300px" />;

      case 'giant':
        return <img src="https://i.imgur.com/ETm9hbd.png" alt="cyclops" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/71UpTvc.png" alt="ogre" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/G0mxIzH.png" alt="storm giant" height="300px" width="300px" />;

      case 'humanoid':
        return <img src="https://i.imgur.com/oU5dUAO.png" alt="doppelgänger" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/3uwqa0K.png" alt="monny" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/nDwYbQV.png" alt="satyr" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/bKoUtaL.png" alt="goblin witch" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/LCJJAK0.png" alt="monny" height="300px" width="300px" />;

      case 'Humanoid (Any Race)':
        return <img src="https://i.imgur.com/LCJJAK0.png" alt="monny" height="300px" width="300px" />;

      case 'ooze':
        return <img src="https://i.imgur.com/WnjVHLk.png" alt="yellow ooze" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/22yu8Ph.png" alt="gelatanous ooze" height="300px" width="300px" />;

      case 'undead':
        return <img src="https://i.imgur.com/TZ6dL6Z.png" alt="ghoul" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/4WbIwqq.png" alt="banshee" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/cqwWTid.png" alt="mummy" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/0DKsC9u.png" alt="ghost" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/yfbGrNH.png" alt="monny" height="300px" width="300px" />;
      // <img src="https://i.imgur.com/JNnOLyL.png" alt="liche" height="300px" width="300px" />;
      default:
        return null
    }
  }

  return (
    <div>{showImage()}</div>
  )
}

export default Images;