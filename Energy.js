let energy = 0;
let energyThreshold = 0;
let minCheck = 0;
let maxCheck = 100;

function energyCheckCallBack(energy, minEnergy, maxEnergy) 
{	
    if (energy >= minEnergy || energy <= maxEnergy)
    {
        
	}
    else 
        {
            if (energy < minEnergy)
            {
			    energy = minCheck;
		    }		
            else		
            {
			    energy = maxCheck;
		    }	
        }
}
function energyDecrease(decrement)
{	
    energy -= decrement;	
    energyCheckCallBack( );
	energyThresholdCallBack(energyThreshold);
}

function energyIncrease(increment)
{	
    energy += increment;
	energyCheckCallBack(minCheck, maxCheck);
}
function energyThresholdCallBack(threshold)
{	
    if (energy <= threshold)
    {		
        
    }
    
}
