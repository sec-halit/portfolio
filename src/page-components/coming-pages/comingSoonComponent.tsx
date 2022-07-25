import React,{FC} from 'react';
interface IComingSoonProps {
}

const ComingSoonComponent: FC<IComingSoonProps> = () => {
  return <>
    <div className="layout-image-content">
      
    </div>
    <div className="layout-image" style={{backgroundImage:"url('"+(new URL("@/images/coming-soon/coming-soon-pages.svg",import.meta.url).pathname)+"')"}}>
        <div className="typewriter">
            <h1 className="custom-shadow">Coming Soon</h1>
        </div>
    </div>
  </>;
};

export default ComingSoonComponent;
