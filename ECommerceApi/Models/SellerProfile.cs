namespace EcommerceApi.Models
{
    public enum SellerStatus  //enum: sabit değer listesidir.
    {
        Pending =0,
        Approved=1,
        Rejected=2
        
    }
    public class SellerProfile
    {
        public int Id { get; set; }
        public string UserId { get; set; } = default!;
        public ApplicationUser User { get; set; } = default!;
        public string ShopName { get; set; } = default!;
        public string? Description { get; set; }
        public SellerStatus Status { get; set; } = SellerStatus.Pending;
        public ICollection<Product> Products { get; set; } = new List<Product>();

    }
}