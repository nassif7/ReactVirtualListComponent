import React from "react";
// import ListItem from "../ListItem";
import { useVirtual } from "react-virtual";

interface ListGroupItemProps {
  listItem: any;
  maxHeight: number;
  rows: any[];
}
const ListGroup: React.FC<ListGroupItemProps> = ({
  listItem,
  rows,
  maxHeight
}) => {
  const parentRef: any = React.useRef();
  const rowVirtualizer = useVirtual({
    size: rows.length,
    parentRef
  });

  return (
    <div
      ref={parentRef}
      className=""
      style={{
        height: `199px`,
        overflow: "auto"
      }}
    >
      <div
        className="list-group group"
        style={{
          height: `${rowVirtualizer.totalSize}px`,
          position: "relative"
        }}
      >
        {rowVirtualizer.virtualItems.map((virtualRow: any) => (
          <div
            key={virtualRow.index}
            className={`list-group-item ${virtualRow.index % 2 ? "item" : ""}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`
            }}
          >
            {React.createElement(
              listItem,
              { number: rows[virtualRow.index] },
              null
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListGroup;
