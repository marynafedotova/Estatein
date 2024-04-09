import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

export default function Gallary(){
  const onInit = () => {
    console.log('lightGallery has been initialized');
};
return (
    <div className="gallary-block">
        <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            closeOnTap={true}
            thumbnail={true}
        >
            <a href="./images/office1.png" className='lb-100' >
                <img alt="office" src="./images/office1.png" />
            </a>
            <a href="./images/office2.png" className='lb-100'>
                <img alt="team" src="./images/office2.png" />
            </a>
            <a href="./images/office3.png" className='lb-100'>
                <img alt="team" src="./images/office3.png" />
            </a>
            <a href="./images/office4.png" className='lb-50'>
                <img alt="team" src="./images/office4.png" />
            </a>
            <a href="./images/office5.png" className='lb-50'>
                <img alt="team" src="./images/office5.png" />
            </a>
            <a href="./images/office6.png" className='lb-100 last'>
                <img alt="meeting" src="./images/office6.png" />
            </a>
        </LightGallery>
    </div>
);
}