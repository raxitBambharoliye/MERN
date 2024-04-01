

function Models() {
  return (
    <section className="models">
  <div className="container">
    <div className="d-flex align-center justify-content-between">
      <div className="w-4">
        <div className="models-titel">
          <h2>Latest Models</h2>
          <p>
            Lorem ipsum dolor sit amet elit. Ducimus,zamet .Ducimus
            sit,adipisicing zamet sit elit.
          </p>
        </div>
      </div>
      <div className="models-inner">
        <div className="d-flex  align-center">
          {/* 1 */}
          <div className="models-item">
            <img src="image/model-1.png" alt="" />
            <h6>FLOOR LAMPS</h6>
          </div>
          {/* 2 */}
          <div className="models-item">
            <img src="image/model-2.jpg" alt="" />
            <h6>PENDANT</h6>
          </div>
          {/* 3 */}
          <div className="models-item">
            <img src="image/model-3.jpg" alt="" />
            <h6>HOME ACCENT</h6>
          </div>
          {/* 4 */}
          <div className="models-item">
            <img src="image/model-4.jpg" alt="" />
            <h6>TABLE LAMPS</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Models
