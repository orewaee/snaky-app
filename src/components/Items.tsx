import Item from "./Item";

import "../styles/Items.scss";

export default function Items({items}: {items: any[]}) {
    return <section className="items">
        { items.map((item, index) => <Item index={index} link={item.link} name={item.name} password={item.password} />) }
    </section>
}
