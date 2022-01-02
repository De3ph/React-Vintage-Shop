function AnimatedImage({imageLink, width}) {
return (
    <img src={imageLink} alt="" className='maskThis' width={width} />
);
}

export default AnimatedImage;