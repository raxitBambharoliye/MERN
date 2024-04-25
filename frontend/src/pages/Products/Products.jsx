import { Banner, Button, Category, ProductItem } from "../../components"
import '../../assets/css/product.css'
function Products() {
  const productData=[1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <>
      {/* product offer slider gos here */}
      <Banner />
      {/* category */}
      <Category />
      <section className="categoryProducts">
        <div className="container">
          <h2 className="text-center">Category Name</h2>

          <div className="categoryProductsInner mt-5  ">
            <div className="row gx-3">
              {productData.map((element, index) => (
                 <div className="col-lg-3">
              <ProductItem/>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
