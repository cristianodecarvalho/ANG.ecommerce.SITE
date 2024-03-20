import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then((c) => c.LoginComponent) 
    },
    {
        path: 'signup',
        loadComponent: () => import('./signup/signup.component').then((c) => c.SignupComponent) 
    },
    {
        path: 'order',
        loadComponent: () => import('./track-order/track-order.component').then((c) => c.TrackOrderComponent)
    },
    {
        path: 'customer',
        loadComponent: () => import('./customer/customer.component').then((c) => c.CustomerComponent)
    },
    {
        path: 'customer/dashboard',
        loadComponent: () => import('./customer/components/dashboard/dashboard.component').then((c) => c.DashboardComponent) 
    },
    {
        path: 'customer/cart',
        loadComponent: () => import('./customer/components/cart/cart.component').then((c) => c.CartComponent) 
    },
    {
        path: 'customer/my_orders',
        loadComponent: () => import('./customer/components/my-orders/my-orders.component').then((c) => c.MyOrdersComponent) 
    },
    {
        path: 'customer/ordered_products/:orderId',
        loadComponent: () => import('./customer/components/view-ordered-products/view-ordered-products.component').then((c) => c.ViewOrderedProductsComponent) 
    },
    {
        path: 'customer/review/:productId',
        loadComponent: () => import('./customer/components/review-ordered-product/review-ordered-product.component').then((c) => c.ReviewOrderedProductComponent) 
    },
    {
        path: 'customer/product/:productId',
        loadComponent: () => import('./customer/components/view-product-detail/view-product-detail.component').then((c) => c.ViewProductDetailComponent) 
    },
    {
        path: 'customer/wishlist',
        loadComponent: () => import('./customer/components/view-wishlist/view-wishlist.component').then((c) => c.ViewWishlistComponent) 
    },
    {
        path: 'admin',
        loadComponent: () => import('./admin/admin.component').then((c) => c.AdminComponent) 
    },
    {
        path: 'admin/dashboard',
        loadComponent: () => import('./admin/components/dashboard/dashboard.component').then((c) => c.DashboardComponent) 
    },
    {
        path: 'admin/category',
        loadComponent: () => import('./admin/components/post-category/post-category.component').then((c) => c.PostCategoryComponent) 
    },
    {
        path: 'admin/product',
        loadComponent: () => import('./admin/components/post-product/post-product.component').then((c) => c.PostProductComponent) 
    },
    {
        path: 'admin/product/:productId',
        loadComponent: () => import('./admin/components/update-product/update-product.component').then((c) => c.UpdateProductComponent) 
    },
    {
        path: 'admin/post-coupon',
        loadComponent: () => import('./admin/components/post-coupon/post-coupon.component').then((c) => c.PostCouponComponent) 
    },
    {
        path: 'admin/coupons',
        loadComponent: () => import('./admin/components/coupons/coupons.component').then((c) => c.CouponsComponent) 
    },
    {
        path: 'admin/orders',
        loadComponent: () => import('./admin/components/orders/orders.component').then((c) => c.OrdersComponent) 
    },
    {
        path: 'admin/faq/:productId',
        loadComponent: () => import('./admin/components/post-product-faq/post-product-faq.component').then((c) => c.PostProductFaqComponent) 
    },
    {
        path: 'admin/analytics',
        loadComponent: () => import('./admin/components/analytics/analytics.component').then((c) => c.AnalyticsComponent) 
    },
];
