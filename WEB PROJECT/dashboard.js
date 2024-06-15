document.addEventListener('DOMContentLoaded', () => {
    // Simulated data fetch
    const fetchData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    totalOrders: 120,
                    totalRevenue: 3050.75,
                    newCustomers: 45,
                });
            }, 1000);
        });
    };

    // Update the dashboard with data
    const updateDashboard = async () => {
        const data = await fetchData();
        document.getElementById('total-orders').textContent = data.totalOrders;
        document.getElementById('total-revenue').textContent = `$${data.totalRevenue.toFixed(2)}`;
        document.getElementById('new-customers').textContent = data.newCustomers;
    };

    updateDashboard();
});
