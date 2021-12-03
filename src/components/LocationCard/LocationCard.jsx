
export default function LocationCard({ location }) {
    return (
        <div className="Card">
            <p>
            ShopName: {location.shopName}
            </p>
            <p>
            Street: {location.Street}
            </p>
            <p>
            city: {location.city}
            </p>
            <p>
            State: {location.State}
            </p>
            <p>
            ZipCode: {location.ZipCode}
            </p>
        </div>
    ); 
}