using Microsoft.AspNetCore.Identity;

namespace EcommerceApi.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? FullName { get; set; }
        public SellerProfile? SellerProfile { get; set; }
    }
}