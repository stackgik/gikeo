import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

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
import ProtectedRoute from "./ui/ProtectedRoute";
import { BookmarksProvider } from "./context/BookmarksContext";
import Bookmark from "./pages/Bookmark";

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
      <BookmarksProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <Routes>
              <Route index element={<Login />} />
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/explore/movies" element={<ExploreMovies />} />
                <Route path="/search" element={<SearchedMedia />} />
                <Route path="/bookmarks" element={<Bookmark />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster
            position="top-center"
            gutter={6}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "15px",
                padding: "10px 20px",
                backgroundColor: "grey-0",
                color: "grey-700",
              },
            }}
          />
        </QueryClientProvider>
      </BookmarksProvider>
    </DarkModeProvider>
  );
};

export default App;

// mFOdRUPzLs3Agnyo
// PAT = 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;
