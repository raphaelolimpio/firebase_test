# CHANGELOG - Ferraco Mobile

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

-   **2024-05-06:** Created initial `CHANGELOG.md` file to track project changes.
-   **2024-05-06:** Created initial `DRS.md` file to track project requirements.
-   **2024-05-06:** Created initial `README.md` file.
-   **2024-05-05:** Added `ClientLayout` component.
- **2024-05-05**: created `icons.tsx` file to place all of the project icons.

### Changed

-   **2024-05-06:** Updated `globals.css` with new color scheme.
-   **2024-05-06:** Updated `QuickAccessIcons` component with new icon sizes, text sizes, text spacing, and hover colors.
-   **2024-05-06:** Added smooth color transitions to `CategoryItem`, `ScrollButton`, `ProductCard` and `ClientLayout` components.
-   **2024-05-06:** Changed all imports in `page.tsx` to relative paths.
-   **2024-05-06:** Added all external image domains to `next.config.ts`.
- **2024-05-05**: Moved all components to the `src/components` folder.
- **2024-05-05**: Deleted `dummy-products.ts` file.
- **2024-05-05**: updated the `Product` interface and `getProducts` function.

### Removed

-   **2024-05-05:** Removed all functions and components from the Home component.
- **2024-05-05**: Removed `useEffect` import.
- **2024-05-05**: Removed the const `categories`.
-   **2024-05-05:** Removed `src/components/icons.ts` and created `src/components/icons.tsx`
-   **2024-05-05:** Removed the file `src/data/dummy-products.ts`.

### Fixed

- **2024-05-06**: Fixed the `Module not found` error by correcting all imports to relative paths.
-   **2024-05-06:** Fixed the `Invalid src prop` error by adding allowed domains to `next.config.ts`.
- **2024-05-05**: fixed the path of `CategoryItem`, `PromotionItem`, `ScrollButton`, `ProductCard`
- **2024-05-05**: fixed the path of `CategoriesSection`, `PromotionsSection`, `ProductListSection` and `QuickAccessIcons`