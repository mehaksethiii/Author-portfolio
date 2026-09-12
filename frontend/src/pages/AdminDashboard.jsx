const AdminDashboard = () => {
  return (
    <div className="py-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif mb-8">Author Dashboard</h1>
        <div className="bg-white dark:bg-[var(--color-dark-brown)] p-8 border border-charcoal/10 dark:border-cream/10 rounded-sm">
          <p className="text-charcoal/60 dark:text-cream/60 mb-6">
            This area will be protected by authentication. It allows you to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-charcoal/80 dark:text-cream/80">
            <li>Manage Book details and purchase links</li>
            <li>Moderate Reader Reviews (Approve/Reject)</li>
            <li>Manage Fan Corner submissions</li>
            <li>View Messages and PDF Purchase Requests</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
