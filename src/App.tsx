import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { DarkModeProvider } from "./context/DarkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./features/movies/MovieDetails";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ExploreMovies from "./pages/ExploreMovies";
import SearchedMedia from "./features/search/SearchedMedia";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const App = (): JSX.Element => {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/:mediaType/:id" element={<Details />} />
              <Route path="/explore/movies" element={<ExploreMovies />} />
              <Route path="/search" element={<SearchedMedia />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </DarkModeProvider>
  );
};

export default App;

// mFOdRUPzLs3Agnyo
