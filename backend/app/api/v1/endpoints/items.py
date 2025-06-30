from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.core.deps import get_current_user
from app.models.user import User
from app.models.item import Item
from app.schemas.item import ItemCreate, ItemResponse, ItemUpdate

router = APIRouter()

@router.get("/", response_model=List[ItemResponse])
def read_items(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(get_current_user),
) -> Any:
    """
    Retrieve items.
    """
    items = db.query(Item).offset(skip).limit(limit).all()
    return items

@router.post("/", response_model=ItemResponse)
def create_item(
    *,
    db: Session = Depends(get_db),
    item_in: ItemCreate,
    current_user: User = Depends(get_current_user),
) -> Any:
    """
    Create new item.
    """
    item_data = item_in.model_dump()
    item = Item(
        **item_data,
        owner_id=current_user.id
    )
    db.add(item)
    db.commit()
    db.refresh(item)
    return item

@router.put("/{id}", response_model=ItemResponse)
def update_item(
    *,
    db: Session = Depends(get_db),
    id: int,
    item_in: ItemUpdate,
    current_user: User = Depends(get_current_user),
) -> Any:
    """
    Update an item.
    """
    item = db.query(Item).filter(Item.id == id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    if not item.owner_id == current_user.id:
        raise HTTPException(status_code=400, detail="Not enough permissions")
    
    update_data = item_in.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(item, field, value)
    
    db.add(item)
    db.commit()
    db.refresh(item)
    return item

@router.get("/{id}", response_model=ItemResponse)
def read_item(
    *,
    db: Session = Depends(get_db),
    id: int,
    current_user: User = Depends(get_current_user),
) -> Any:
    """
    Get item by ID.
    """
    item = db.query(Item).filter(Item.id == id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    return item

@router.delete("/{id}")
def delete_item(
    *,
    db: Session = Depends(get_db),
    id: int,
    current_user: User = Depends(get_current_user),
) -> Any:
    """
    Delete an item.
    """
    item = db.query(Item).filter(Item.id == id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    if not item.owner_id == current_user.id:
        raise HTTPException(status_code=400, detail="Not enough permissions")
    
    db.delete(item)
    db.commit()
    return {"ok": True} 