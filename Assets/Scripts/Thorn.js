#pragma strict

//Variables
private var thornRigidbody: Rigidbody2D;
private var initialPosition: Vector3;
private var doInstantiation: boolean = false;
  
public var dragMax: int;
public var thornPrefab: GameObject;


//Functions
function Start () {
	thornRigidbody = GetComponent.<Rigidbody2D>();
	var drag = Random.Range(0, dragMax);

	thornRigidbody.drag = drag;
	initialPosition = transform.position;
}

function Update () {
	if(doInstantiation)
     InstantiatePrefab();
}


function OnBecameInvisible() {
	InstantiatePrefab();
}


function InstantiatePrefab() {
 	if(doInstantiation){
		Instantiate(thornPrefab, initialPosition, transform.localRotation);
		Pointing.points++;
		Destroy(gameObject);
		doInstantiation = false;
	} else {
		doInstantiation = true;
	}
}