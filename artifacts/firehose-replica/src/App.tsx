import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics";
import Home from "@/pages/Home";
import BookCall from "@/pages/BookCall";
import ContentPage from "@/pages/ContentPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={ContentPage} />
      <Route path="/how-it-works" component={ContentPage} />
      <Route path="/pricing" component={ContentPage} />
      <Route path="/case-studies" component={ContentPage} />
      <Route path="/blog" component={ContentPage} />
      <Route path="/industries" component={ContentPage} />
      <Route path="/automations" component={ContentPage} />
      <Route path="/compare" component={ContentPage} />
      <Route path="/guides" component={ContentPage} />
      <Route path="/industries/:slug" component={ContentPage} />
      <Route path="/automations/:slug" component={ContentPage} />
      <Route path="/compare/:slug" component={ContentPage} />
      <Route path="/guides/:slug" component={ContentPage} />
      <Route path="/blog/:slug" component={ContentPage} />
      <Route path="/contact" component={BookCall} />
      <Route path="/get-started" component={BookCall} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <GoogleAnalytics />
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
