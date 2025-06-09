---
created: 2025/4/14 21:59:20
modified: 2025/4/14 22:08:13
cssclasses: []
---

- Render + Provider(context api) + compound 패턴으로  
	- ![[Composition#^d2ddca]]
	- ![[Composition#^78ec7a]]
	- ![[Composition#^d9b54b]]
	- ```js
		import React, {
		  createContext,
		  useContext,
		  useState,
		  ReactNode,
		  useRef,
		  useEffect,
		} from "react";
		
		// Context
		const DropdownContext = createContext<any>(null);
		
		function Dropdown({
		  children,
		  value,
		  onChange,
		  label,
		}: {
		  value: string;
		  onChange: (val: string) => void;
		  label: string;
		  children: ReactNode;
		}) {
		  const [isOpen, setIsOpen] = useState(false);
		  const dropdownRef = useRef<HTMLDivElement>(null);
		
		  // 외부 클릭 시 닫기
		  useEffect(() => {
		    const handleClickOutside = (e: MouseEvent) => {
		      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
		        setIsOpen(false);
		      }
		    };
		    document.addEventListener("mousedown", handleClickOutside);
		    return () => document.removeEventListener("mousedown", handleClickOutside);
		  }, []);
		
		  return (
		    <DropdownContext.Provider
		      value={{ isOpen, setIsOpen, value, onChange }}
		    >
		      <div ref={dropdownRef} style={{ position: "relative", display: "inline-block" }}>
		        {children}
		      </div>
		    </DropdownContext.Provider>
		  );
		}
		
		Dropdown.Trigger = function Trigger({ as: Component }: { as: React.ElementType }) {
		  const { isOpen, setIsOpen } = useContext(DropdownContext);
		
		  return (
		    <Component onClick={() => setIsOpen((open: boolean) => !open)} />
		  );
		};
		
		Dropdown.Menu = function Menu({ children }: { children: ReactNode }) {
		  const { isOpen } = useContext(DropdownContext);
		
		  if (!isOpen) return null;
		
		  return (
		    <div
		      style={{
		        position: "absolute",
		        top: "100%",
		        left: 0,
		        zIndex: 1000,
		        backgroundColor: "#fff",
		        border: "1px solid #ccc",
		        minWidth: "150px",
		        marginTop: 4,
		        padding: 8,
		      }}
		    >
		      {children}
		    </div>
		  );
		};
		
		Dropdown.Item = function Item({ children }: { children: string }) {
		  const { onChange, setIsOpen } = useContext(DropdownContext);
		
		  const handleSelect = () => {
		    onChange(children);
		    setIsOpen(false);
		  };
		
		  return (
		    <div
		      onClick={handleSelect}
		      style={{
		        padding: "6px 8px",
		        cursor: "pointer",
		        borderRadius: 4,
		        hover: { backgroundColor: "#eee" },
		      }}
		    >
		      {children}
		    </div>
		  );
		};
		
		export default Dropdown;
	- ```js
		function Select({ label, trigger, value, onChange, options }) {
		  return (
		    <Dropdown label={label} value={value} onChange={onChange}>
		      <Dropdown.Trigger as={trigger} />
		      <Dropdown.Menu>
		        {options.map((option: string) => (
		          <Dropdown.Item key={option}>{option}</Dropdown.Item>
		        ))}
		      </Dropdown.Menu>
		    </Dropdown>
		  );
		}
			
		function App() {
		  const [value, setValue] = useState("선택하기");
		  const options = ["Apple", "Banana", "Cherry"];
		
		  return (
		    <div>
		      <Select
		        label="과일"
		        value={value}
		        onChange={setValue}
		        options={options}
		        trigger={() => <button>{value}</button>}
		      />
		    </div>
		  );
		}

- ARIA, Focus Trap, Keyboard Navigation 추가 버전
	- ```js
		import React, {
		  createContext,
		  useContext,
		  useRef,
		  useState,
		  useEffect,
		  ReactNode,
		  useCallback,
		} from "react";
		
		// Context 선언
		const DropdownContext = createContext<any>(null);
		
		// Dropdown 루트
		function Dropdown({ children, value, onChange }: any) {
		  const [isOpen, setIsOpen] = useState(false);
		  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
		  const itemsRef = useRef<HTMLElement[]>([]);
		  const dropdownRef = useRef<HTMLDivElement>(null);
		
		  const registerItem = (el: HTMLElement | null, index: number) => {
		    if (el) itemsRef.current[index] = el;
		  };
		
		  const handleKeyDown = useCallback(
		    (e: KeyboardEvent) => {
		      if (!isOpen) return;
		
		      if (e.key === "ArrowDown") {
		        e.preventDefault();
		        setHighlightedIndex((prev) => (prev === null ? 0 : Math.min(prev + 1, itemsRef.current.length - 1)));
		      } else if (e.key === "ArrowUp") {
		        e.preventDefault();
		        setHighlightedIndex((prev) => (prev === null ? itemsRef.current.length - 1 : Math.max(prev - 1, 0)));
		      } else if (e.key === "Enter" || e.key === " ") {
		        e.preventDefault();
		        if (highlightedIndex !== null) {
		          const item = itemsRef.current[highlightedIndex];
		          item?.click();
		        }
		      } else if (e.key === "Escape") {
		        e.preventDefault();
		        setIsOpen(false);
		      }
		    },
		    [isOpen, highlightedIndex]
		  );
		
		  useEffect(() => {
		    document.addEventListener("keydown", handleKeyDown);
		    return () => document.removeEventListener("keydown", handleKeyDown);
		  }, [handleKeyDown]);
		
		  // 외부 클릭 시 닫기
		  useEffect(() => {
		    const handleClickOutside = (e: MouseEvent) => {
		      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
		        setIsOpen(false);
		      }
		    };
		    document.addEventListener("mousedown", handleClickOutside);
		    return () => document.removeEventListener("mousedown", handleClickOutside);
		  }, []);
		
		  // 포커스 트랩
		  useEffect(() => {
		    if (isOpen) {
		      itemsRef.current[highlightedIndex ?? 0]?.focus();
		    }
		  }, [isOpen, highlightedIndex]);
		
		  return (
		    <DropdownContext.Provider
		      value={{
		        isOpen,
		        setIsOpen,
		        value,
		        onChange,
		        registerItem,
		        highlightedIndex,
		      }}
		    >
		      <div ref={dropdownRef} style={{ position: "relative", display: "inline-block" }}>
		        {children}
		      </div>
		    </DropdownContext.Provider>
		  );
		}
		
		// Trigger
		Dropdown.Trigger = function Trigger({ as: Component }: { as: React.ElementType }) {
		  const { isOpen, setIsOpen } = useContext(DropdownContext);
		  const triggerId = "dropdown-trigger";
		  const menuId = "dropdown-menu";
		
		  return (
		    <Component
		      id={triggerId}
		      role="button"
		      aria-haspopup="listbox"
		      aria-expanded={isOpen}
		      aria-controls={menuId}
		      onClick={() => setIsOpen((prev: boolean) => !prev)}
		    />
		  );
		};
		
		// Menu
		Dropdown.Menu = function Menu({ children }: { children: ReactNode }) {
		  const { isOpen } = useContext(DropdownContext);
		
		  if (!isOpen) return null;
		
		  return (
		    <ul
		      id="dropdown-menu"
		      role="listbox"
		      style={{
		        position: "absolute",
		        top: "100%",
		        left: 0,
		        zIndex: 1000,
		        backgroundColor: "#fff",
		        border: "1px solid #ccc",
		        minWidth: "150px",
		        marginTop: 4,
		        padding: 8,
		        listStyle: "none",
		      }}
		    >
		      {children}
		    </ul>
		  );
		};
		
		// Item
		Dropdown.Item = function Item({
		  children,
		  index,
		}: {
		  children: string;
		  index: number;
		}) {
		  const {
		    onChange,
		    value,
		    setIsOpen,
		    registerItem,
		    highlightedIndex,
		  } = useContext(DropdownContext);
		
		  const ref = useRef<HTMLLIElement>(null);
		
		  useEffect(() => {
		    registerItem(ref.current, index);
		  }, [ref, index, registerItem]);
		
		  const isSelected = value === children;
		  const isFocused = highlightedIndex === index;
		
		  return (
		    <li
		      role="option"
		      aria-selected={isSelected}
		      ref={ref}
		      tabIndex={-1}
		      onClick={() => {
		        onChange(children);
		        setIsOpen(false);
		      }}
		      style={{
		        padding: "6px 8px",
		        cursor: "pointer",
		        backgroundColor: isFocused ? "#eee" : "white",
		        borderRadius: 4,
		      }}
		    >
		      {children}
		    </li>
		  );
		};
		
		export default Dropdown;