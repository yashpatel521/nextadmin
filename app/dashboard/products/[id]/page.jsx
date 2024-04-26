import styles from "./singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = {
    id: id,
    title: "Product 1",
    price: 21,
    stock: 54,
    color: "black",
    size: "large",
    desc: "Product 1 description",
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={product.size || "size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={product.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
