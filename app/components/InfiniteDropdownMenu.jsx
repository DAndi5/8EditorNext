import { DropdownMenu, MenuItem } from '@react-md/menu';

export default function InfiniteDropdownMenu({ index, depth, buttonChildren }) {
    return (
        <DropdownMenu
            id={`infinite-dropdown-menu-${depth + 1}-${index + 1}`}
            buttonChildren={buttonChildren ?? `Item ${index + 3}`}
        >
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            {Array.from({ length: 4 }, (_, i) => (
                <InfiniteDropdownMenu key={i} depth={depth + 1} index={i} />
            ))}

            <MenuItem>Item 7</MenuItem>
        </DropdownMenu>
    );
}