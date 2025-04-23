
function PropsComponent({title, img, discreption}){
    return<>
          <img src={img} alt={title} />
          <h2>{title}</h2>
          <p>{discreption}</p>
    </>
}
export default PropsComponent;