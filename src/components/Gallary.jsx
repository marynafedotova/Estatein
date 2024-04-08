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
            <a href="public/images/office1.png" className='lb-100' >
                <img alt="office" src="public/images/office1.png" />
            </a>
            <a href="public/images/office2.png" className='lb-100'>
                <img alt="team" src="public/images/office2.png" />
            </a>
            <a href="public/images/office3.png" className='lb-100'>
                <img alt="team" src="public/images/office3.png" />
            </a>
            <a href="public/images/office4.png" className='lb-50'>
                <img alt="team" src="public/images/office4.png" />
            </a>
            <a href="public/images/office5.png" className='lb-50'>
                <img alt="team" src="public/images/office5.png" />
            </a>
            <a href="public/images/office6.png" className='lb-100 last'>
                <img alt="meeting" src="public/images/office6.png" />
            </a>
        </LightGallery>
    </div>
);
}